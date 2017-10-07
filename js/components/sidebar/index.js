// SIDEBAR IS THE DRAWER 

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

const drawerCover = require("../../../img/drawer-cover.png");

const drawerImage = require("../../../img/logo-kitchen-sink.png");


//CONSTANTE OF MENU DETAILS
//Name = Display name
//Icon = Displayed icon -> Taken from Ionicons
//bg = Background of the types
//types = Number of types
const datas = [
	{
		name: "Home",
		route: "Home",
		icon: "home",
		bg: "#C5F442",
	},
	{
		name: "Books",
		route: "Books",
		icon: "ios-book",
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
		route: "Uniglem",
		icon: "fa-university",
		bg: "#477EEA",
		types: "8",
	},
	{
		name: "Advice/Tutoring",
		route: "Advtut",
		icon: "university",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "Associations",
		route: "Associations",
		icon: "notifications",
		bg: "#4DCAE0",
	},
	{
		name: "Events",
		route: "Events",
		icon: "radio-button-off",
		bg: "#1EBC7C",
		types: "9",
	},
	{
		name: "Furniture",
		route: "Furniture",
		icon: "keypad",
		bg: "#B89EF5",
		types: "5",
	},
	{
		name: "Other",
		route: "Other",
		icon: "checkmark-circle",
		bg: "#EB6B23",
	},
	{
		name: "Deck Swiper",
		route: "NHDeckSwiper",
		icon: "swap",
		bg: "#3591FA",
		types: "2",
	},
	{
		name: "Fab",
		route: "NHFab",
		icon: "help-buoy",
		bg: "#EF6092",
		types: "2",
	},
	{
		name: "Form & Inputs",
		route: "NHForm",
		icon: "call",
		bg: "#EFB406",
		types: "12",
	},
	{
		name: "Icon",
		route: "NHIcon",
		icon: "information-circle",
		bg: "#EF6092",
	},
	{
		name: "Layout",
		route: "NHLayout",
		icon: "grid",
		bg: "#9F897C",
		types: "5",
	},
	{
		name: "List",
		route: "NHList",
		icon: "lock",
		bg: "#5DCEE2",
		types: "7",
	},
	{
		name: "ListSwipe",
		route: "ListSwipe",
		icon: "swap",
		bg: "#C5F442",
		types: "2",
	},
	{
		name: "Picker",
		route: "NHPicker",
		icon: "arrow-dropdown",
		bg: "#F50C75",
	},
	{
		name: "Radio",
		route: "NHRadio",
		icon: "radio-button-on",
		bg: "#6FEA90",
	},
	{
		name: "SearchBar",
		route: "NHSearchbar",
		icon: "search",
		bg: "#29783B",
	},
	{
		name: "Segment",
		route: "Segment",
		icon: "menu",
		bg: "#0A2C6B",
		types: "2",
	},
	{
		name: "Spinner",
		route: "NHSpinner",
		icon: "navigate",
		bg: "#BE6F50",
	},
	{
		name: "Tabs",
		route: "NHTab",
		icon: "home",
		bg: "#AB6AED",
		types: "3",
	},
	{
		name: "Thumbnail",
		route: "NHThumbnail",
		icon: "image",
		bg: "#cc0000",
		types: "2",
	},
	{
		name: "Toast",
		route: "Toast",
		icon: "albums",
		bg: "#C5F442",
	},
	{
		name: "Typography",
		route: "NHTypography",
		icon: "paper",
		bg: "#48525D",
	},
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
						<Image square style={styles.drawerImage} source={drawerImage} />
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
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
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
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
