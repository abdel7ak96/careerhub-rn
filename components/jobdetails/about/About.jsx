import { View, Text } from 'react-native';

import styles from './about.style';

const About = ({ info, benefits }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
      <View style={styles}>
        <Text style={styles.headText}>Benefits</Text>
        {benefits.map((item, i) => (
          <View style={styles.pointWrapper} key={item + i}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default About;
