import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import {MoreVert, Favorite } from '@mui/icons-material'


interface Props{
    image: string;
    name: string;
    user: string;
    descrption : string;
}
const CardComponent : React.FC<Props> =({image,name, user, descrption}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {user}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={name}
            subheader={new Date(). toLocaleDateString()}
          />
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {descrption}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Favorite />
            </IconButton>
            
          </CardActions>
       
        </Card>
      );
}
export default CardComponent;