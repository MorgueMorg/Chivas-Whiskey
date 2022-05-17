import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ShoppingCart } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { clientContext } from "../../contexts/ClientContext";
import { Link } from "react-router-dom";
import { API } from "../../helpers/api";
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ item }) {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [views, setViews] = React.useState(false);
  const [star, setStar] = React.useState(0);
  const [formValid, setFormValid] = React.useState(false);
  const data = React.useContext(clientContext);
  const {
    addProductToCart,
    checkProductInCart,
    deleteProductInCart,
    likeCounter,
    viewsCounter,
    addProductToFavorite,
    checkProductInFavorite,
    deleteProductInFavorite,
    addProductToHistory,
  } = data;

  // Функция для рейтинга, без парсинта вовзращает функцию вместо цифры на json-servere
  const starCounter = async (id, star) => {
    await axios.patch(`${API}/${id}`, { star: parseInt((star += setStar)) });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const doubbleAdd = (item) => {
    addProductToCart(item);
    addProductToHistory(item);
  };

  return (
    // #e0ddd7
    <Card sx={{ maxWidth: 345, background: "white", color: "black" }}>
      <Link to={`/details/${item.id}`}>
        <CardHeader
          disabled={views}
          onClick={() => {
            viewsCounter(item.id, item.views || 0);
            setViews(true);
          }}
          title={item.name}
          subheader={`${item.price} сом`}
        />
      </Link>
      <CardMedia
        className="product-card-image"
        component="img"
        // height="194"
        height="400"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography
          className="product-card-description"
          variant="body2"
          color="text.secondary"
        >
          {item.description}
        </Typography>
        {/* <StarRating /> */}
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating
            name="simple-controlled"
            value={star}
            onChange={(e, newStar) => {
              starCounter(item.id, newStar || 0);
              // setValue(newValue);
            }}
          />
        </Box>
        {/* Star End */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          disabled={liked}
          onClick={() => {
            likeCounter(item.id, item.likes || 0);
            setLiked(true);
          }}
          aria-label="add to favorites"
        >
          <FavoriteIcon color={liked ? "error" : "inherit"} />
          <span>{item.likes}</span>
        </IconButton>
        <IconButton
          // disabled={views}
          // onClick={() => {
          //   viewsCounter(item.id, item.views || 0);
          //   setViews(true);
          // }}
          // aria-label="add to favorites"
        >
          <VisibilityIcon color={views ? "error" : "inherit"} />
          <span>{item.views}</span>
        </IconButton>
        {checkProductInFavorite(item.id) ? (
          <IconButton onClick={() => deleteProductInFavorite(item.id)}>
            <BookmarkIcon color="error" />
          </IconButton>
        ) : (
          <IconButton onClick={() => addProductToFavorite(item)}>
            <BookmarkIcon sx={{ color: "black" }} />
          </IconButton>
        )}
        {checkProductInCart(item.id) ? (
          <IconButton onClick={() => deleteProductInCart(item.id)}>
            <ShoppingCart color="error" />
          </IconButton>
        ) : (
          <IconButton onClick={() => doubbleAdd(item)}>
            <ShoppingCart sx={{ color: "black" }} />
          </IconButton>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "black" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        className="product-card-collapse"
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <Typography paragraph>{item.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
