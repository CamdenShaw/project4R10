import React, { Component } from 'react';
import { Text } from 'react-native'
import { TabNavigation, TabNavigationItem as TabItem, StackNavigation} from '@expo/ex-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { colours, typography } from '../config/styles'

import Router from './routes'

class NavBar extends Component {
    static route = {
        navigationBar: {
            visible: false,
        }
    }
    render() {
        return (
            <TabNavigation
                initialTab="schedule"
                tabBarColor="black">
                <TabItem
                    id="schedule"
                    title="Schedule"
                    renderTitle={this.renderTitle}
                    renderIcon={isSelected => this.renderIcon("ios-calendar", isSelected)}>
                    <StackNavigation 
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                    />
                </TabItem>
                <TabItem
                    id="favs"
                    title="Favs"
                    renderTitle={this.renderTitle}
                    renderIcon={isSelected => this.renderIcon("ios-heart", isSelected)}>
                    <StackNavigation 
                        id="favs"
                        navigatorUID="favs"
                        initialRoute={Router.getRoute('favs')}
                    />
                </TabItem>
                <TabItem
                    id="about"
                    title="About"
                    renderTitle={this.renderTitle}
                    renderIcon={isSelected => this.renderIcon("ios-information-circle", isSelected)}>
                    <StackNavigation 
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
                    />
                </TabItem>
            </TabNavigation>
        );
    }
    renderIcon(iconName, isSelected) {
        const colour = isSelected ? "white" : colours.mediumGrey;
        return <Icon size={25} name={iconName} color={colour} />
    }
    renderTitle(isSelected, title) {
        const colour = isSelected ? "white" : colours.mediumGrey
        return <Text style={{ color: colour, fontFamily: typography.fontMain }}>{title}</Text>
    }
}

export default NavBar;