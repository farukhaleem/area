import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
	paperItem: {
		minWidth: 275,
		position: 'sticky',
		top: 86
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	list: {
		padding: '10px 0 0 0',
	},
	listItem: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: 0
	},
	divider: {
		margin: '16px 0px',
		flexShrink: 0,
		borderWidth: '0px 0px thin',
		borderStyle: 'solid',
		borderColor: 'rgba(0, 0, 0, 0.12)',
	}
}));



let LivePreview = (props) => {

	const classes = useStyles();

	return (
		<Card className={classes.paperItem}>
			<CardContent>
				<Box fontWeight="200" component="h1" m={0}>
					Order Detail
				</Box>
				<List className={classes.list}>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Paper Topic
						</Typography>

						<Typography component="h6">
							{props.state[0].paperTopic}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Type of Paper
						</Typography>

						<Typography component="h6">
							{props.pdtCaption[0]}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Style
						</Typography>

						<Typography component="h6">
							{props.state[0].style}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Language
						</Typography>

						<Typography component="h6">
							{props.state[0].language}
						</Typography>
					</ListItem>
					
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
						Page Type
						</Typography>

						<Typography component="h6">
							{props.state[0].pageType}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
						Academic Level
						</Typography>

						<Typography component="h6">
							{props.state[0].academicLevel}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
						Subject Area
						</Typography>

						<Typography component="h6">
							{props.subject[0]}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
						Number of References
						</Typography>

						<Typography component="h6">
							{props.state[0].references}
						</Typography>
					</ListItem>
					
					<Divider className={classes.divider} />
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Currency
						</Typography>

						<Typography component="h6">
							{props.state[0].currency}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Number of pages/ Words
						</Typography>

						<Typography component="h6">
							{props.state[0].pages} page(s)
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Deadline
						</Typography>

						<Typography component="h6">
							{props.state[0].deadline}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Cost per page
						</Typography>

						<Typography component="h6">
							{parseFloat(props.costPerPage[0] * props.currencyRate[0]).toFixed(2)} {props.state[0].currency}
						</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
						Total Cost
						</Typography>

						<Typography component="h6">
						{parseFloat(props.state[0].pages * props.costPerPage[0] * props.currencyRate[0]).toFixed(2)} {props.state[0].currency}
						</Typography>
					</ListItem>
					{/* <Divider className={classes.divider} />
					<ListItem style={{listStyle: 'none', padding: 0, display:'block'}}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
						Detail
						</Typography>
						<Typography component="h6">
							{props.state[0].detail}
						</Typography>
					</ListItem> */}
				</List>
			</CardContent>
		</Card>
	)
}

export default LivePreview;