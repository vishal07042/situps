// // import React, { useState, useEffect } from "react";
// // import {
// // 	Platform,
// // 	StyleSheet,
// // 	Text,
// // 	TouchableOpacity,
// // 	View,
// // } from "react-native";
// // import { Magnetometer, Accelerometer } from "expo-sensors";
// // import { Gyroscope } from "expo-sensors";

// // import { Barometer } from "expo-sensors";

// // export default function App() {
// // 	const [{ x: mx, y: my, z: mz }, setMagnetometerData] = useState({
// // 		x: 0,
// // 		y: 0,
// // 		z: 0,
// // 	});
// // 	const [{ x: ax, y: ay, z: az }, setAccelerometerData] = useState({
// // 		x: 0,
// // 		y: 0,
// // 		z: 0,
// // 	});
// // 	const [{ x: gx, y: gy, z: gz }, setGyroscopeData] = useState({
// // 		x: 0,
// // 		y: 0,
// // 		z: 0,
// // 	});

// // 	const [magnetometerSubscription, setMagnetometerSubscription] =
// // 		useState(null);
// // 	const [accelerometerSubscription, setAccelerometerSubscription] =
// // 		useState(null);
// // 	const [gyroscopeSubscription, setGyroscopeSubscription] = useState(null);

// // 	const _subscribeMagnetometer = () => {
// // 		setMagnetometerSubscription(
// // 			Magnetometer.addListener((result) => {
// // 				setMagnetometerData(result);
// // 			})
// // 		);
// // 	};

// // 	const _unsubscribeMagnetometer = () => {
// // 		magnetometerSubscription && magnetometerSubscription.remove();
// // 		setMagnetometerSubscription(null);
// // 	};

// // 	const _subscribeAccelerometer = () => {
// // 		setAccelerometerSubscription(
// // 			Accelerometer.addListener((result) => {
// // 				setAccelerometerData(result);
// // 			})
// // 		);
// // 	};

// // 	const _unsubscribeAccelerometer = () => {
// // 		accelerometerSubscription && accelerometerSubscription.remove();
// // 		setAccelerometerSubscription(null);
// // 	};

// // 	const _subscribeGyroscope = () => {
// // 		setGyroscopeSubscription(
// // 			Gyroscope.addListener((result) => {
// // 				setGyroscopeData(result);
// // 			})
// // 		);
// // 	};

// // 	const _unsubscribeGyroscope = () => {
// // 		gyroscopeSubscription && gyroscopeSubscription.remove();
// // 		setGyroscopeSubscription(null);
// // 	};

// // 	useEffect(() => {
// // 		_subscribeMagnetometer();
// // 		_subscribeAccelerometer();
// // 		_subscribeGyroscope();
// // 		return () => {
// // 			_unsubscribeMagnetometer();
// // 			_unsubscribeAccelerometer();
// // 			_unsubscribeGyroscope();
// // 		};
// // 	}, []);

// // 	return (
// // 		<View style={styles.container}>
// // 			<View style={styles.sensorContainer}>
// // 				<Text style={styles.text}>Magnetometer:</Text>
// // 				<Text style={styles.text}>x: {(mx * 10).toFixed(0)}</Text>
// // 				<Text style={styles.text}>y: {(my * 10).toFixed(0)}</Text>
// // 				<Text style={styles.text}>z: {(mz * 10).toFixed(0)}</Text>
// // 				<View style={styles.buttonContainer}></View>
// // 			</View>
// // 			<View style={styles.sensorContainer}>
// // 				<Text style={styles.text}>
// // 					Accelerometer: (in gs where 1g = 9.81 m/s^2)
// // 				</Text>
// // 				<Text style={styles.text}>x: {(ax * 10).toFixed(0)}</Text>
// // 				<Text style={styles.text}>y: {(ay * 10).toFixed(0)}</Text>
// // 				<Text style={styles.text}>z: {(az * 10).toFixed(0)}</Text>
// // 				<View style={styles.buttonContainer}></View>
// // 			</View>
// // 			<View style={styles.sensorContainer}>
// // 				<Text style={styles.text}>Gyroscope:</Text>
// // 				<Text style={styles.text}>x: {(gx * 10).toFixed(0)}</Text>
// // 				<Text style={styles.text}>y: {(gy * 10).toFixed(0)}</Text>
// // 				<Text style={styles.text}>z: {(gz * 10).toFixed(0)}</Text>
// // 				<View style={styles.buttonContainer}></View>
// // 			</View>
// // 		</View>
// // 	);
// // }

// // const styles = StyleSheet.create({
// // 	container: {
// // 		flex: 1,
// // 		justifyContent: "center",
// // 		paddingHorizontal: 20,
// // 	},
// // 	sensorContainer: {
// // 		marginBottom: 20,
// // 	},
// // 	text: {
// // 		textAlign: "center",
// // 	},
// // 	buttonContainer: {
// // 		flexDirection: "row",
// // 		alignItems: "stretch",
// // 		marginTop: 15,
// // 	},
// // 	button: {
// // 		flex: 1,
// // 		justifyContent: "center",
// // 		alignItems: "center",
// // 		backgroundColor: "#eee",
// // 		padding: 10,
// // 	},
// // 	middleButton: {
// // 		borderLeftWidth: 1,
// // 		borderRightWidth: 1,
// // 		borderColor: "#ccc",
// // 	},
// // });





// import React, { useState, useEffect } from "react";
// import {
// 	StyleSheet,
// 	Text,
// 	TouchableOpacity,
// 	View,
// 	Platform,
// } from "react-native";
// import {
// 	Magnetometer,
// 	Accelerometer,
// 	Gyroscope,
// 	Barometer,
// } from "expo-sensors";

// export default function App() {
// 	const [{ x: mx, y: my, z: mz }, setMagnetometerData] = useState({
// 		x: 0,
// 		y: 0,
// 		z: 0,
// 	});
// 	const [{ x: ax, y: ay, z: az }, setAccelerometerData] = useState({
// 		x: 0,
// 		y: 0,
// 		z: 0,
// 	});
// 	const [{ x: gx, y: gy, z: gz }, setGyroscopeData] = useState({
// 		x: 0,
// 		y: 0,
// 		z: 0,
// 	});
// 	const [{ pressure, relativeAltitude }, setBarometerData] = useState({
// 		pressure: 0,
// 		relativeAltitude: 0,
// 	});

// 	const [magnetometerSubscription, setMagnetometerSubscription] =
// 		useState(null);
// 	const [accelerometerSubscription, setAccelerometerSubscription] =
// 		useState(null);
// 	const [gyroscopeSubscription, setGyroscopeSubscription] = useState(null);
// 	const [barometerSubscription, setBarometerSubscription] = useState(null);

// 	const _subscribeMagnetometer = () => {
// 		setMagnetometerSubscription(
// 			Magnetometer.addListener(setMagnetometerData)
// 		);
// 	};

// 	const _unsubscribeMagnetometer = () => {
// 		magnetometerSubscription && magnetometerSubscription.remove();
// 		setMagnetometerSubscription(null);
// 	};

// 	const _subscribeAccelerometer = () => {
// 		setAccelerometerSubscription(
// 			Accelerometer.addListener(setAccelerometerData)
// 		);
// 	};

// 	const _unsubscribeAccelerometer = () => {
// 		accelerometerSubscription && accelerometerSubscription.remove();
// 		setAccelerometerSubscription(null);
// 	};

// 	const _subscribeGyroscope = () => {
// 		setGyroscopeSubscription(Gyroscope.addListener(setGyroscopeData));
// 	};

// 	const _unsubscribeGyroscope = () => {
// 		gyroscopeSubscription && gyroscopeSubscription.remove();
// 		setGyroscopeSubscription(null);
// 	};

// 	const _subscribeBarometer = () => {
// 		setBarometerSubscription(Barometer.addListener(setBarometerData));
// 	};

// 	const _unsubscribeBarometer = () => {
// 		barometerSubscription && barometerSubscription.remove();
// 		setBarometerSubscription(null);
// 	};

// 	useEffect(() => {
// 		_subscribeMagnetometer();
// 		_subscribeAccelerometer();
// 		_subscribeGyroscope();
// 		_subscribeBarometer();
// 		return () => {
// 			_unsubscribeMagnetometer();
// 			_unsubscribeAccelerometer();
// 			_unsubscribeGyroscope();
// 			_unsubscribeBarometer();
// 		};
// 	}, []);

// 	return (
// 		<View style={styles.container}>
// 			<View style={styles.sensorContainer}>
// 				<Text style={styles.text}>Magnetometer:</Text>
// 				<Text style={styles.text}>x: {(mx * 10).toFixed(0)}</Text>
// 				<Text style={styles.text}>y: {(my * 10).toFixed(0)}</Text>
// 				<Text style={styles.text}>z: {(mz * 10).toFixed(0)}</Text>
// 				<TouchableOpacity
// 					onPress={
// 						magnetometerSubscription
// 							? _unsubscribeMagnetometer
// 							: _subscribeMagnetometer
// 					}
// 					style={styles.button}
// 				>
// 					<Text>
// 						{magnetometerSubscription ? "Unsubscribe" : "Subscribe"}
// 					</Text>
// 				</TouchableOpacity>
// 			</View>

// 			<View style={styles.sensorContainer}>
// 				<Text style={styles.text}>
// 					Accelerometer: (in gs where 1g = 9.81 m/s^2)
// 				</Text>
// 				<Text style={styles.text}>x: {(ax * 10).toFixed(0)}</Text>
// 				<Text style={styles.text}>y: {(ay * 10).toFixed(0)}</Text>
// 				<Text style={styles.text}>z: {(az * 10).toFixed(0)}</Text>
// 				<TouchableOpacity
// 					onPress={
// 						accelerometerSubscription
// 							? _unsubscribeAccelerometer
// 							: _subscribeAccelerometer
// 					}
// 					style={styles.button}
// 				>
// 					<Text>
// 						{accelerometerSubscription
// 							? "Unsubscribe"
// 							: "Subscribe"}
// 					</Text>
// 				</TouchableOpacity>
// 			</View>

// 			<View style={styles.sensorContainer}>
// 				<Text style={styles.text}>Gyroscope:</Text>
// 				<Text style={styles.text}>x: {(gx * 10).toFixed(0)}</Text>
// 				<Text style={styles.text}>y: {(gy * 10).toFixed(0)}</Text>
// 				<Text style={styles.text}>z: {(gz * 10).toFixed(0)}</Text>
// 				<TouchableOpacity
// 					onPress={
// 						gyroscopeSubscription
// 							? _unsubscribeGyroscope
// 							: _subscribeGyroscope
// 					}
// 					style={styles.button}
// 				>
// 					<Text>
// 						{gyroscopeSubscription ? "Unsubscribe" : "Subscribe"}
// 					</Text>
// 				</TouchableOpacity>
// 			</View>

// 			<View style={styles.sensorContainer}>
// 				<Text style={styles.text}>Barometer:</Text>
// 				<Text style={styles.text}>Pressure: {pressure} hPa</Text>
// 				<Text style={styles.text}>
// 					Relative Altitude:{" "}
// 					{Platform.OS === "ios"
// 						? `${relativeAltitude} m`
// 						: `Only available on iOS`}
// 				</Text>
// 				<TouchableOpacity
// 					onPress={
// 						barometerSubscription
// 							? _unsubscribeBarometer
// 							: _subscribeBarometer
// 					}
// 					style={styles.button}
// 				>
// 					<Text>
// 						{barometerSubscription ? "Unsubscribe" : "Subscribe"}
// 					</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: "center",
// 		paddingHorizontal: 20,
// 	},
// 	sensorContainer: {
// 		marginBottom: 20,
// 	},
// 	text: {
// 		textAlign: "center",
// 	},
// 	button: {
// 		justifyContent: "center",
// 		alignItems: "center",
// 		backgroundColor: "#eee",
// 		padding: 10,
// 		marginTop: 15,
// 	},
// });





import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import {
	Magnetometer,
	Accelerometer,
	Gyroscope,
	Barometer,
	LightSensor,
} from "expo-sensors";

export default function App() {
	const [{ x: mx, y: my, z: mz }, setMagnetometerData] = useState({
		x: 0,
		y: 0,
		z: 0,
	});
	const [{ x: ax, y: ay, z: az }, setAccelerometerData] = useState({
		x: 0,
		y: 0,
		z: 0,
	});
	const [{ x: gx, y: gy, z: gz }, setGyroscopeData] = useState({
		x: 0,
		y: 0,
		z: 0,
	});
	const [{ pressure, relativeAltitude }, setBarometerData] = useState({
		pressure: 0,
		relativeAltitude: 0,
	});
	const [{ illuminance }, setLightSensorData] = useState({ illuminance: 0 });

	useEffect(() => {
		const magnetometerSubscription =
			Magnetometer.addListener(setMagnetometerData);
		const accelerometerSubscription =
			Accelerometer.addListener(setAccelerometerData);
		const gyroscopeSubscription = Gyroscope.addListener(setGyroscopeData);
		const barometerSubscription = Barometer.addListener(setBarometerData);
		const lightSensorSubscription =
			LightSensor.addListener(setLightSensorData);

		return () => {
			magnetometerSubscription && magnetometerSubscription.remove();
			accelerometerSubscription && accelerometerSubscription.remove();
			gyroscopeSubscription && gyroscopeSubscription.remove();
			barometerSubscription && barometerSubscription.remove();
			lightSensorSubscription && lightSensorSubscription.remove();
		};
	}, []);

	useEffect(() => {
		console.log("Barometer Data:", { pressure, relativeAltitude });
	}, [pressure, relativeAltitude]);

	return (
		<View style={styles.container}>
			<View style={styles.sensorContainer}>
				<Text style={styles.text}>Magnetometer:</Text>
				<Text style={styles.text}>x: {(mx * 10).toFixed(0)}</Text>
				<Text style={styles.text}>y: {(my * 10).toFixed(0)}</Text>
				<Text style={styles.text}>z: {(mz * 10).toFixed(0)}</Text>
			</View>

			<View style={styles.sensorContainer}>
				<Text style={styles.text}>
					Accelerometer: (in gs where 1g = 9.81 m/s^2)
				</Text>
				<Text style={styles.text}>x: {(ax * 10).toFixed(0)}</Text>
				<Text style={styles.text}>y: {(ay * 10).toFixed(0)}</Text>
				<Text style={styles.text}>z: {(az * 10).toFixed(0)}</Text>
			</View>

			<View style={styles.sensorContainer}>
				<Text style={styles.text}>Gyroscope:</Text>
				<Text style={styles.text}>x: {(gx * 10).toFixed(0)}</Text>
				<Text style={styles.text}>y: {(gy * 10).toFixed(0)}</Text>
				<Text style={styles.text}>z: {(gz * 10).toFixed(0)}</Text>
			</View>

			<View style={styles.sensorContainer}>
				<Text style={styles.text}>Barometer:</Text>
				<Text style={styles.text}>Pressure: {pressure} hPa</Text>
				<Text style={styles.text}>
					Relative Altitude:{" "}
					{Platform.OS === "ios"
						? `${relativeAltitude} m`
						: `Only available on iOS`}
				</Text>
			</View>

			<View style={styles.sensorContainer}>
				<Text style={styles.text}>Light Sensor:</Text>
				<Text style={styles.text}>
					Illuminance:{" "}
					{Platform.OS === "android"
						? `${illuminance} lx`
						: `Only available on Android`}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	sensorContainer: {
		marginBottom: 20,
	},
	text: {
		textAlign: "center",
	},
});
