import React, {useContext} from 'react';
import { DomainPath } from './../App';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import HistoryIcon from '@material-ui/icons/History';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '30px 0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  tokenLink: {
    textDecoration: 'none',
    color: '#3f51b5'
  }
}));

export default function DashboardCards() {
  const classes = useStyles();
  const path = useContext(DomainPath);


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <ShoppingCartIcon style={{ fontSize: 48 }} />
              <Typography gutterBottom variant="h5" component="h2">
                Place New Order
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Place your order here.
                </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  to={`${path}/placeorder`}
                  className={classes.tokenLink}
                >
                  Click here
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <LocalAtmIcon style={{ fontSize: 48 }} />
                <Typography gutterBottom variant="h5" component="h2">
                  Payment History
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Click to see your payment history.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  to={`${path}/order_preview`}
                  className={classes.tokenLink}
                >
                  View Details
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <TrackChangesIcon style={{ fontSize: 48 }} />
                <Typography gutterBottom variant="h5" component="h2">
                  Track Orders
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Track your active orders here.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  to={`${path}/track_order`}
                  className={classes.tokenLink}
                >
                  View Details
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <HistoryIcon style={{ fontSize: 48 }} />
                <Typography gutterBottom variant="h5" component="h2">
                  Order History
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Click to see all your orders history.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  to={`${path}/order_preview`}
                  className={classes.tokenLink}
                >
                  View Details
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}
