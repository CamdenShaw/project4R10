import React, { Component } from 'react';
import { Text } from 'react-native'
import { TabNavigation, TabNavigationItem as TabItem, StackNavigation} from '@expo/ex-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { colours } from '../config/styles'

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
                    selectedStyle={{backgroundColor: "blue"}}
                    renderIcon={isSelected => this.renderIcon("ios-calendar-outline", isSelected)}>
                    <StackNavigation 
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                    />
                </TabItem>
                <TabItem
                    id="about"
                    title="About"
                    renderTitle={this.renderTitle}
                    selectedStyle={{backgroundColor: "deeppink"}}
                    renderIcon={isSelected => this.renderIcon("ios-information-circle-outline", isSelected)}>
                    <StackNavigation 
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
                    />
                </TabItem>
                <TabItem
                    id="favs"
                    title="Favs"
                    renderTitle={this.renderTitle}
                    selectedStyle={{backgroundColor: "purple"}}
                    renderIcon={isSelected => this.renderIcon("ios-heart-outline", isSelected)}>
                    <StackNavigation 
                        id="favs"
                        navigatorUID="favs"
                        initialRoute={Router.getRoute('favs')}
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
        return <Text style={{color: colour}}>{title}</Text>
    }
}

export default NavBar;