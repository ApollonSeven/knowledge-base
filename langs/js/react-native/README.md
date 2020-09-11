# React Native

## Docs

[React Native](https://reactnative.dev/)
[Expo](https://expo.io/)


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
### ExpoKit
Create project with TypeScript configuration
```sh
$ npm install -g create-react-native-app
$ create-react-native-app my-app --scripts-version=react-native-scripts-ts
$ cd my-app/
$ npm start && react-native run-android
```

### RN cli
Create project with TypeScript configuration
```sh
$ npx --ignore-existing react-native init MyApp --template react-native-template-typescript
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

## Build APK
```sh
$ keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
1. Place the ```my-upload-key.keystore``` file under the ```android/app``` directory in your project folder.
2. Edit the file ```~/.gradle/gradle.properties``` or ```android/gradle.properties```, and add the following (replace ***** with the correct keystore password, alias and key password),
```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```
3. Edit the file ```android/app/build.gradle``` in your project folder, and add the signing config,
```gradle
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```
4. Generating the release APK
AAB:
```sh
$ cd android && ./gradlew bundleRelease
```
APK:
```sh
$ cd android && ./gradlew assembleRelease
```
[Other](https://reactnative.dev/docs/signed-apk-android)

### Problems
With Daemon:
1. Add strings to ```build.properties```
```
org.gradle.daemon=true
org.gradle.configureondemand=true
org.gradle.jvmargs=-Xmx4g -XX:MaxPermSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
```
2. ```app/build.gradle```
```
android {
    dexOptions {
       javaMaxHeapSize "3g"
    }
}
```