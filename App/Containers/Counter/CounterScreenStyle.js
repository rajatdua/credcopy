/**
 * Created by rajatdua on 2020-01-02
 */
import { StyleSheet } from 'react-native';
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme';

export default StyleSheet.create({
	text: {
		...Fonts.normal,
		...Helpers.center,
		color: Colors.primary,
		marginBottom: Metrics.tiny,
	},
});
