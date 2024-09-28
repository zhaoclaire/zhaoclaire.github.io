"use client";
import Reference from "@/components/Reference";
import style from "./page.module.css";

import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function VideoPoet() {
  const references = [
    {
      title: 'Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets',
      url: 'https://arxiv.org/pdf/2311.15127'
    }
  ]
  return (
    <main>
      <Center>
        <Heading className={style.title}>Paper Reading Notes</Heading>
      </Center>
      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em">
          Overview
        </Heading>
        The paper explore the data pipeline and training strategy for video
        generative models, of which there are no agreed on standard procedures,
        as the authors claim to be the case at the time this paper is written.
        With pretraining on large low resolution data and finetuning on a much
        samller high resultion dataset, the authors were able to train a latent
        video diffusion model (LDM) called Stable Video Diffusion, capable of
        text-to-video and image-to-video generation. This model is shown to
        perform well on the downstream task of serving as a base model that can
        be finetuned to generate multiple views of a 3D object in a consistent
        and compute efficient way.
      </Container>

      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em" pt="1em">
          Data Curation
        </Heading>
        The authors emphasizes the importance of the video data curation process
        for training high quality model. Given a raw video cut detection is
        performed to segment the video into clips. My interpretation is that
        these clips are continuous segments of the raw video, and training on
        continuous video results in models that give continuous motion. Dividing
        a video into clips increases the number of training data points
        (although not the entire time length of the total data size). The raw
        video is filtered for the motion it contains through{" "}
        <Text as="b">optical flow score</Text>. This score is computed by first
        extracting dense optical flow maps at 2 fps using the OpenCV
        implementation of Farneback algorithm, then the flow maps are downsized
        for efficient storage and averaged over space and time to obtain the
        score. Near motionless videos are filtered out. Some videos contain much
        text (indeed, training video models on presentation slides is pretty
        useless), these are recognized by optical character recognition and
        removed from the training data. Additional filtered by CLIP score and
        aesthetic score are also applied. Once filtered the videos are then ran
        through captioning, and video descriptions are generated from passing
        captions through LLM.
      </Container>

      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em" pt="1em">
          Training and Evaluation
        </Heading>
        The authors proposes a three stage pipeline for training a video
        generation model:
        <OrderedList pl="2em" pb="1em" pt="1em">
          <ListItem>Image pretraining</ListItem>
          <ListItem>Video pretraining</ListItem>
          <ListItem>Video finetuning</ListItem>
        </OrderedList>
        One take away during image pretraining is to adopt a noise schedule that
        shift towards more noise for high resolution images. It is found that
        after video pretraining the base model has learned motion
        representation, as the base model is seen to outperform baselines in
        zero-shot text-to-video generation.
      </Container>
      <Container fontSize="xl" maxW={"container.lg"} pt="1em">
        Frame interpolation is used to increase the frame rate, thereby
        increasing the smoothness of videos. Evaluation is performed via user
        preference study.
      </Container>
      <Reference referenceList={references}/>
      <Box height="15vh" />
    </main>
  );
}
