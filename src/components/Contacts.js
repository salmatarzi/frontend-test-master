import React from "react";
import { FlatList, Text, View } from "react-native";
import { contactsStyles } from "../styles/Contacts";
import { Link } from "react-router-native";

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
      <Link to={`${this.props.match.url}/:${item.id}`}>
        <View style={contactsStyles.item}>
          {index === 0 ? <View style={contactsStyles.separator} /> : null}
          <Text style={contactsStyles.itemText}>Name: {item.name}</Text>
          <View style={contactsStyles.separator} />
        </View>
      </Link>
    );
  };

  render() {
    return (
      <View style={contactsStyles.container}>
        <Text style={contactsStyles.title}>Contacts</Text>
        <FlatList
          style={contactsStyles.listContainer}
          contentContainerStyle={contactsStyles.listContainer}
          data={this.state.contactsList}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default Contacts;
