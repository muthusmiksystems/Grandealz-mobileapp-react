import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Progress from 'react-native-progress';

export default function ProgressBar(props: any) {
    console.log("props for ....", props);

    const [step, setStep] = React.useState(0);
    // Progress from 0 to 100
    // var progress = step > 0 ? step / 4 : 0;
    var progress = props.value / 250
    // Status from "Stopped" to "Done"
    var status = step > 0 ? (step < 4 ? "In Progress" : "Done") : "Stopped";
    return (
        <View style={styles.app}>
            {/* <View style={styles.header}>
                <Text style={styles.headerText}>Step {step}</Text>
            </View> */}
            <Progress.Circle size={80} showsText={true} thickness={5} progress={progress} />
            {/* <View style={styles.status}>
                <Text style={styles.statusText}>Status: {status}</Text>
            </View> */}
            {/* <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        onPress={() => {
                            setStep(step - 1);
                        }}
                        disabled={step === 0}
                        style={styles.button}
                        title="Previous"
                    />
                </View>
                <View >
                    <Button
                        onPress={() => {
                            setStep(step + 1);
                        }}
                        disabled={step === 4}
                        title="Next"
                    />
                </View>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        height: 100,
        // flexDirection: "column",
        justifyContent: "flex-end",
        gap: 100,
        // alignItems: "center",
        borderWidth: 2
    },
    header: {
        marginBottom: 20,
        fontSize: 20
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 30
    },
    status: {
        marginBottom: 20,
        marginTop: 20
    },
    statusText: {
        fontWeight: "bold",
        fontSize: 25
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
    },
    button: {
        marginRight: 35
    }
});