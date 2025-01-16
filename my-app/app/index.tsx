import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import RootNavigator from "/workspaces/training/my-app/app/navigation/index.jsx"


export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
