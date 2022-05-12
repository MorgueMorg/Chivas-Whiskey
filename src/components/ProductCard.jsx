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
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Reddit, ShoppingCart } from "@mui/icons-material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { clientContext } from "../contexts/ClientContext";
import { Link } from "react-router-dom";
import { blue, red } from "@mui/material/colors";

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
  const data = React.useContext(clientContext);
  const {
    addProductToCart,
    checkProductInCart,
    deleteProductInCart,    
    likeCounter,
    addProductToFavorite,
    checkProductInFavorite,
    deleteProductInFavorite,
  } = data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // #e0ddd7
    <Card sx={{ maxWidth: 345, background: 'white', color: "black"}}>
      <Link to={`/details/${item.id}`}>
        <CardHeader title={item.name} subheader={`${item.price} сом` } />
      </Link>
      <CardMedia
        className="product-card-image"
        component="img"
        height="194"
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
        <IconButton aria-label="share">
          <ShareIcon sx={{ color: "black" }}/>
        </IconButton>
        {checkProductInFavorite(item.id) ? (
          <IconButton onClick={() => deleteProductInFavorite(item.id)} >
            <BookmarkIcon color="error"/>
          </IconButton>
        ) : (
          <IconButton onClick={() => addProductToFavorite(item)}>
            <BookmarkIcon sx={{ color: "black" }}  />
          </IconButton>
        )} 
        {checkProductInCart(item.id) ? (
          <IconButton onClick={() => deleteProductInCart(item.id)}>
            <ShoppingCart color="error" />
          </IconButton>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
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
