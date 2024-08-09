import {Text, ScrollView} from 'react-native';
import React from 'react';

export default function AboutPage() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white pt-5">
      {/* <Text style={{fontSize:25,color:'#0688A3',fontWeight:'500'}}>About </Text> */}
      {/* <Text className="text-center text-black text-xl font-bold my-3">
        About LecFeed
      </Text> */}
      <Text className="text-black text-base justify-center items-center text-justify mx-3 mb-10">
        LecFeed Enables students to send feedback anonymously and instantly to
        lecturer’s inbox In order to get feedback on how students are finding
        the content and delivery of their lectures, teachers capture feedback
        before the end of term, so as to make changes to the style and delivery
        of the content. This leads to significant increase in student
        satisfaction. This application consists of a very simple feature of
        capturing student feedback. It contains a field to input the email
        address of the lecturer and three further text boxes that will enable
        students to input their feedback: ‘stop doing’, ‘start doing’ and
        ‘continue doing’. It is envisaged that the simplicity and ease of use,
        coupled with the anonymity of the sender will enable and encourage users
        to send candid feedback to teachers. This will contribute towards
        improvement in delivery, style and content. As opposed to capturing
        feedback along the same lines by using traditional ‘pen and paper
        ‘methods, this free application will make it very convenient for
        students to give instant and anonymous feedback. The application will
        not be specific to any university, organisation or subject and has been
        designed in such a way that it can be used anywhere and anytime, across
        all areas irrespective of the field of study. The key element in its
        design lies in its simplicity, convenience and ease of use. The app
        comes with complete anonymity as there are no requirements to register
        or log on and neither does it require any other details of the sender to
        be entered before sending the feedback. From the teachers’ perspective,
        it will help them capture feedback without having to go through the
        trouble of designing, printing, distributing, collecting and storing
        feedback forms. Once an announcement is made to send them feedback,
        teachers can find the messages in their inbox by the time they reach
        their office. It has been designed by academics with many years of
        experience in pedagogical practice and it was felt that the increasing
        use of smartphones by students in classrooms at all levels can be
        effectively harnessed to capture instant, anonymous and candid feedback.
        The design is based on an established, successful and widely used
        theoretical model of pedagogical practice that aids in teaching and
        learning. It will be free to use with no intrusive ads and given that it
        is not ‘branded’ with any specific institution or country, it will find
        wide global appeal.
      </Text>
    </ScrollView>
  );
}
