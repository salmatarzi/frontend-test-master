import React from "react";
import { FlatList, Text, View, Image } from "react-native";
import { contactsStyles } from "../styles/Contacts";
import { Link, Route, withRouter } from "../utils/router";
import { ContactView } from "./ContactView";
import { isWeb } from "../utils/common";
import { commonStyles } from "../styles/common";
const URL = "https://jsonplaceholder.typicode.com/users";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: []
    };
    fetch(URL).then(response => {
      response.json().then(responseJson => {
        if (this.props.location.contact) {
          this.setState({
            contactsList: [
              ...responseJson,
              {
                id:
                  responseJson.sort((a, b) => a.id - b.id)[
                    responseJson.length - 1
                  ].id + 1,
                ...this.props.location.contact
              }
            ]
          });
        } else {
          this.setState({
            contactsList: responseJson
          });
        }
      });
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <Link to={{ pathname: `/contacts/${item.id}`, contact: item }}>
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

  renderSeparator = () => <View style={commonStyles.separator} />;

  keyExtractor = item => item.id.toString();

  mobileView = () => {
    return (
      <View style={commonStyles.container}>
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
      <View style={[commonStyles.container, { flexDirection: "row" }]}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          style={commonStyles.flex1}
          contentContainerStyle={commonStyles.flex1}
          data={this.state.contactsList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <View style={{ flex: 1 }}>
          <Route exact path={"/contacts/:id"} component={ContactView} />
        </View>
      </View>
    );
  };

  saveContact = contact => {
    this.setState({
      contactsList: [...this.state.contactsList, contact]
    });
  };

  render() {
    return (
      <View style={commonStyles.flex1}>
        <Link to="/add">
          <Image
            style={commonStyles.addIcon}
            source={require("../../assets/ic_add.png")}
          />
        </Link>
        {isWeb ? this.webView() : this.mobileView()}{" "}
      </View>
    );
  }
}

export default Contacts;
