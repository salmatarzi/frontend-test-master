import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Router, Switch, Route, Link, Redirect } from "./utils/router"; // we prepared react-router for you here
import { isDesktop, isIos } from "./utils/router"; // we prepared some useful booleans for you here
import Contacts from "./components/Contacts";
import { ContactView } from "./components/ContactView";
import { isMobile, isWeb } from "./utils/common";

class App extends Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            {isMobile ? <Route path="/" exact component={Contacts} /> : null}
            {isMobile ? (
              <Route path="/:id" exact component={ContactView} />
            ) : null}
            {isWeb ? (
              <Contacts
                match={{
                  params: { id: 1 },
                  url: "/:id"
                }}
              />
            ) : null}
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  }
});

export default App;
