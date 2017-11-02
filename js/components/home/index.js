/************************************************************************ */
/* FILE TITLE : home/index.js                                             */
/* FILE AIM : Home Page code                                              */
/* Exported functions:                                                    */
/*                                                                        */
/*                                                                        */
/* Exported Variables:                                                    */
/*                                                                        */
/* DOCUMENTATION USED:                                                    */
/*                                                                        */
/**************************************************************************/

import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Left, Right, Title, Icon, Body} from "native-base";

import styles from "./styles";

//Background Launchscreen
const launchscreenBg = require("../../../assets/images/doodles.png");
//Logo launchscreen
const launchscreenLogo = require("../../../assets/images/logo-sharing-is-caring.png");

class Home extends Component {
	// eslint-disable-line



	render() {
		return (
			<Container>
				<Header style={styles.Header}
					androidStatusBarColor='#6FAF98'
					backgroundColor='#6FAF98'> 
					<Left>
						<Button
						transparent
						light
						onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
						<Icon name="menu" color='white' />
						</Button>
					</Left>
					<Right />
				</Header>
				<StatusBar 
						barStyle="light-content" 
						style={styles.StatusBar}
						backgroundColor="#c0c0c0"
						translucent={false}
				 />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					<View style={styles.logoContainer}>
						<Image source={launchscreenLogo} style={styles.logo} />
					</View>
					<View
						style={{
							alignItems: "center",
							marginBottom: 50,
							backgroundColor: "transparent",
						}}
					>
						<H3 style={styles.text}>Sharing is caring</H3>
						<View style={{ marginTop: 10 }} />
					</View>
					<View style={{ marginBottom: 80 }}>
						<Button
							style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
							<Text>See the different categories</Text>
						</Button>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
