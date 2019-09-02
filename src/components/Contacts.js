import React from "react";
import { FlatList, Text, View } from "react-native";
import { contactsStyles } from "../styles/Contacts";
import { Link, Route } from "../utils/router";
import { ContactView } from "./ContactView";
import { isWeb } from "../utils/common";
const URL = "https://jsonplaceholder.typicode.com/users";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: []
    };
    fetch(URL).then(response => {
      response.json().then(responseJson => {
        this.setState({
          contactsList: responseJson
        });
      });
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <Link to={{ pathname: `/${item.id}`, contact: item }}>
        <View style={contactsStyles.item}>
          {index === 0 ? <View style={contactsStyles.separator} /> : null}
          <Text style={contactsStyles.itemText}>Name: {item.name}</Text>
          {index === this.state.contactsList.length - 1 ? (
            <View style={contactsStyles.separator} />
          ) : null}
        </View>
      </Link>
    );
  };

  renderHeader = () => <Text style={contactsStyles.title}>Contacts</Text>;

  renderSeparator = () => <View style={contactsStyles.separator} />;

  keyExtractor = item => item.id.toString();

  mobileView = () => {
    return (
      <View style={contactsStyles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          style={contactsStyles.listContainer}
          contentContainerStyle={contactsStyles.listContainer}
          data={this.state.contactsList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  };

  webView = () => {
    return (
      <View style={[contactsStyles.container, { flexDirection: "row" }]}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          style={contactsStyles.flex1}
          contentContainerStyle={contactsStyles.flex1}
          data={this.state.contactsList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <View style={{ flex: 1 }}>
          <Route exact path={"/:id"} component={ContactView} />
        </View>
      </View>
    );
  };

  render() {
    return isWeb ? this.webView() : this.mobileView();
  }
}

export default Contacts;
