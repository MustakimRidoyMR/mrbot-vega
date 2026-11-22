import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from '@amazon-devices/webview';

const MR_BOT_URL = 'https://mustakimridoymr.github.io/MR-Bot/';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: MR_BOT_URL }}
        style={styles.webView}
        hasTVPreferredFocus
        allowSystemKeyEvents
        javaScriptEnabled
        domStorageEnabled
        onError={(event) => {
          console.error('MR Bot page failed to load:', event.nativeEvent);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webView: {
    flex: 1,
  },
});
