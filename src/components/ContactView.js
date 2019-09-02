import React from "react";
import { Text, View, Linking, Platform, TouchableOpacity } from "react-native";
import { contactViewStyles } from "../styles/ContactView";
import { contactsStyles } from "../styles/Contacts";
import { Link } from "../utils/router";
import { isMobile } from "../utils/common";

const callPhoneNumber = number => {
  let phoneNumber = "";

  if (Platform.OS === "android") {
    phoneNumber = "tel:${" + number.toString() + "}";
  } else {
    phoneNumber = "telprompt:${" + number.toString() + "}";
  }
  Linking.openURL(phoneNumber);
};

const openLink = url => {
  if (isMobile) Linking.openURL("http://www." + url);
  else window.open("http://www." + url, "_blank");
};

export const ContactView = ({ match, location }) => {
  const contact = location.contact;
  return (
    <View style={contactViewStyles.container}>
      {isMobile ? (
        <View style={contactViewStyles.backButtonView}>
          <Link to={"/"}>
            <Text style={contactViewStyles.backButton}>{`< Back`}</Text>
          </Link>
        </View>
      ) : null}
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
      <TouchableOpacity
        style={contactViewStyles.alignSelfFlexStart}
        onPress={() => callPhoneNumber(contact.phone)}
      >
        <Text style={contactViewStyles.cellView}>Phone: {contact.phone}</Text>
      </TouchableOpacity>
      <View style={contactsStyles.separator} />
      <TouchableOpacity
        onPress={() => openLink(contact.website)}
        style={contactViewStyles.alignSelfFlexStart}
      >
        <Text style={contactViewStyles.cellView}>
          Website: {contact.website}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
