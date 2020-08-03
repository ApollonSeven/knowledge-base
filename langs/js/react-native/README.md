# React Native

## Installing
### RN cli
1. Install Android Studio
    * ```Android SDK Platform 28```
    * ```Intel x86 Atom_64 System Image``` or ```Google APIs Intel x86 Atom System Image```

2. Install rn-cli
```sh
$ npm install -g react-native-cli
```

3. Configure the ANDROID_HOME environment variable
Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc config file:
```sh
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Expo
```sh
$ npm install -g expo-cli
```

## Create Project
### RN cli
Create project with TypeScript configuration
```sh
$ npm install -g create-react-native-app
$ create-react-native-app my-app --scripts-version=react-native-scripts-ts
$ cd my-app/
$ npm start && react-native run-android
```

### Expo
```sh
$ expo init myNewProject
$ cd myNewProject
$ expo start
```

## Expo eject 
1. Run command:
```expo eject```
2. ???
3. PROFIT!