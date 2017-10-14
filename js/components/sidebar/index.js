// SIDEBAR IS THE DRAWER 
//Left menu
//Here menu paths and items are defined

import React, { Component } from "react";
import { Image } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";

const drawerCover = require("../../../assets/images/retro-furnish-background.png");

const drawerImage = require("../../../assets/images/logo-sharing-is-caring.png");

/*
import getTheme from '../sic-theme/components';
import material from '../sic-theme/variables/material';
*/


//CONSTANTE OF MENU DETAILS
//Name = Display name
//Icon = Displayed icon -> Taken from Ionicons
//bg = Background of the types
//types = Number of types
const datas = [
	{
		name: "My home",
		route: "Home",
		icon: "apps",
		bg: "#C5F442",
	},
	{
		name: "Books",
		route: "Books",
		icon: "book",
		bg: "#C5F442",
	},
	{
		name: "Housing",
		route: "Housing",
		icon: "home",
		bg: "#C5F442",
	},
	{
		name: "Uniseminars/Glemser",
		route: "Unigle",
		icon: "thunderstorm",
		bg: "#477EEA",
		types: "8",
	},
	{
		name: "Advice/Tutoring",
		route: "Advtut",
		icon: "help-buoy",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "Associations",
		route: "Associations",
		icon: "people",
		bg: "#4DCAE0",
	},
	{
		name: "Events",
		route: "Events",
		icon: "beer",
		bg: "#1EBC7C",
		types: "9",
	},
	{
		name: "Furniture",
		route: "Furniture",
		icon: "easel",
		bg: "#B89EF5",
		types: "5",
	},
	{
		name: "Other",
		route: "Other",
		icon: "infinite",
		bg: "#EB6B23",
	},
	{
		name: "My account",
		route: "Login",
		icon: "person",
		bg: "#3591FA",
		types: "2",
	}
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>
						<Image square style={styles.drawerImage} source={drawerImage}
						/>
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30}} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Hot`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
