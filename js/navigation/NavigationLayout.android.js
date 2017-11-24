import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { DrawerNavigation, DrawerNavigationItem as DrawerItem, StackNavigation} from '@expo/ex-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import MyAppText from '../components/text/MyAppText'
import { colours } from '../config/styles'

import Router from './routes'

class NavBar extends Component {
    static route = {
        navigationBar: {
            visible: false
        }
    }
    render() {
        return (
            <DrawerNavigation
                id='main'
                initialItem="schedule"
                rendHeader={this.renderHeader()}
                drawerWidth={300}
             >
                <DrawerItem
                    id="schedule"
                    renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
                    selectedStyle={{backgroundColor: "blue"}}
                    renderIcon={isSelected => this.renderIcon("md-calendar", isSelected)}>
                    <StackNavigation 
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                    />
                </DrawerItem>
                <DrawerItem
                    id="about"
                    title="About"
                    renderTitle={this.renderTitle}
                    selectedStyle={{backgroundColor: "deeppink"}}
                    renderIcon={isSelected => this.renderIcon("md-information-circle", isSelected)}>
                    <StackNavigation 
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
                    />
                </DrawerItem>
                <DrawerItem
                    id="favs"
                    title="Favs"
                    renderTitle={this.renderTitle}
                    selectedStyle={{backgroundColor: "purple"}}
                    renderIcon={isSelected => this.renderIcon("md-heart-outline", isSelected)}>
                    <StackNavigation 
                        id="favs"
                        navigatorUID="favs"
                        initialRoute={Router.getRoute('favs')}
                    />
                </DrawerItem>
            </DrawerNavigation>
        );
    }
    renderIcon(iconName, isSelected) {
        const colour = isSelected ? "white" : colours.mediumGrey;
        return <Icon size={25} name={iconName} color={colour} />
    }
    renderTitle(title, isSelected) {
        const colour = isSelected ? "white" : colours.mediumGrey
        return <Text style={{color: colour}}>{title}</Text>
    }

    renderHeader =() =>{
        return <View styles={{height: 30, color: 'black'}} />
    }
}


export default NavBar;