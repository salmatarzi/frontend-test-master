import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles/common";
import { addContactStyles } from "../styles/AddContact";
import { Link, Redirect } from "../utils/router";
import { contactViewStyles } from "../styles/ContactView";

class AddContact extends React.Component {
  contact = {};
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      contactSaved: false
    };
  }

  onChangeName = name => {
    this.setState({
      name
    });
  };

  onChangeUserName = username => {
    this.setState({
      username
    });
  };

  onChangeEmail = email => {
    this.setState({
      email
    });
  };

  onChangePhone = phone => {
    this.setState({
      phone
    });
  };

  onChangeWebsite = website => {
    this.setState({
      website
    });
  };

  isButtonDisabled = () => {
    return (
      this.state.name === "" ||
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.website === ""
    );
  };

  saveContact = () => {
    this.contact = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website
    };
    console.log('!!! -> %o', this.contact);
  };

  button = () => {
    return (
      <TouchableOpacity
        style={[
          commonStyles.button,
          this.isButtonDisabled()
            ? { backgroundColor: "grey" }
            : { backgroundColor: "#608cee" }
        ]}
        disabled={this.isButtonDisabled()}
        onPress={this.saveContact}
      >
        <Text style={commonStyles.buttonText}>Save</Text>
      </TouchableOpacity>
    );
  };

  renderButton = () => {
    return (
      <Link to={{ pathname: "/", contact: this.contact }}>{this.button()}</Link>
    );
  };

  render() {
    if (this.state.contactSaved) return <Redirect to={"/"} />;
    return (
      <View style={commonStyles.container}>
        <View style={contactViewStyles.backButtonView}>
          <Link to={"/"}>
            <Text style={contactViewStyles.backButton}>{`< Back`}</Text>
          </Link>
        </View>
        <Text style={addContactStyles.title}>Add a contact</Text>
        <TextInput
          value={this.state.name}
          onChangeText={this.onChangeName}
          clearButtonMode={"while-editing"}
          placeholder={"Name"}
          style={addContactStyles.inputField}
        />
        <View style={commonStyles.separator} />
        <TextInput
          value={this.state.username}
          onChangeText={this.onChangeUserName}
          clearButtonMode={"while-editing"}
          placeholder={"Username"}
          style={addContactStyles.inputField}
        />
        <View style={commonStyles.separator} />
        <TextInput
          value={this.state.email}
          onChangeText={this.onChangeEmail}
          keyboardType={"email-address"}
          clearButtonMode={"while-editing"}
          placeholder={"Email"}
          style={addContactStyles.inputField}
        />
        <View style={commonStyles.separator} />
        <TextInput
          value={this.state.phone}
          onChangeText={this.onChangePhone}
          keyboardType={"phone-pad"}
          clearButtonMode={"while-editing"}
          placeholder={"Phone"}
          style={addContactStyles.inputField}
        />
        <View style={commonStyles.separator} />
        <TextInput
          value={this.state.website}
          onChangeText={this.onChangeWebsite}
          clearButtonMode={"while-editing"}
          placeholder={"Website"}
          style={addContactStyles.inputField}
        />
        <View style={commonStyles.separator} />
        <View style={addContactStyles.bottomButton}>{this.renderButton()}</View>
      </View>
    );
  }
}

export default AddContact;
