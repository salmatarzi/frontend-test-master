import * as React from "react";
import { Text, View } from "react-native";
import { contactViewStyles } from "../styles/ContactView";
import { contactsStyles } from "../styles/Contacts";
import { Link } from "react-router-native";

export const ContactView = ({ match, location }) => {
  const contact = location.contact;
  return (
    <View style={contactViewStyles.container}>
      <View style={contactViewStyles.backButtonView}>
        <Link to={"/"}>
          <Text style={contactViewStyles.backButton}>{`< Back`}</Text>
        </Link>
      </View>
      <Text style={contactViewStyles.title}>Contact Details</Text>
      <Text style={contactViewStyles.cellView}>ID: {match.params.id}</Text>
      <View style={contactsStyles.separator} />
      <Text style={contactViewStyles.cellView}>Name: {contact.name}</Text>
      <View style={contactsStyles.separator} />
      <Text style={contactViewStyles.cellView}>
        Username: {contact.username}
      </Text>
      <View style={contactsStyles.separator} />
      <Text style={contactViewStyles.cellView}>Email: {contact.email}</Text>
      <View style={contactsStyles.separator} />
      <Text style={contactViewStyles.cellView}>Phone: {contact.phone}</Text>
      <View style={contactsStyles.separator} />
      <Text style={contactViewStyles.cellView}>Website: {contact.website}</Text>
    </View>
  );
};
