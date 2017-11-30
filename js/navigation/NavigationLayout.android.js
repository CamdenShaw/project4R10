import React, { Component } from 'react';
import { Text } from 'react-native'
import { DrawerNavigation, DrawerNavigationItem as DrawerItem, StackNavigation} from '@expo/ex-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import { colours, typography } from '../config/styles'
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
                drawerWidth={200}
             >
                <DrawerItem
                    id="schedule"
                    renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
                    selectedStyle={{backgroundColor: colours.mediumGrey}}
                    renderIcon={isSelected => this.renderIcon("md-calendar", isSelected)}>
                    <StackNavigation 
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                    />
                </DrawerItem>
                <DrawerItem
                    id="favs"
                    renderTitle={isSelected => this.renderTitle('Favourites', isSelected)}
                    selectedStyle={{backgroundColor: colours.mediumGrey}}
                    renderIcon={isSelected => this.renderIcon("md-heart", isSelected)}>
                    <StackNavigation 
                        id="favs"
                        navigatorUID="favs"
                        initialRoute={Router.getRoute('favs')}
                    />
                </DrawerItem>
                <DrawerItem
                    id="about"
                    renderTitle={isSelected => this.renderTitle('About', isSelected)}
                    selectedStyle={{backgroundColor: colours.mediumGrey}}
                    renderIcon={isSelected => this.renderIcon("md-information-circle", isSelected)}>
                    <StackNavigation 
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
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
        return <Text style={{ color: colour, fontFamily: typography.fontMain }}>{title}</Text>
    }
}


export default NavBar;