"use client";

import { Container, Heading, Text } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { ReferenceItem } from "@/components/Reference";

export default function VideoPoet({
  readingList,
  readingListHandler,
}: {
  readingList: ReferenceItem[];
  readingListHandler: any;
}) {
  return (
    <>
      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em">
          Overview
        </Heading>
        The VideoPoet paper introduces a language model for video generation,
        this differs from the diffusion based approaches for video generation
        common these days. Unlike approaches where diffusion models are composed
        after training, the authors propose an end-to-end unified framework. The
        model is pretrained on multimodal data, and can perform text-to-video
        and image-to-video generation, and video-to-video stylization. Further
        finetuning adapts the model for better video consistency as well as to
        perform novel tasks. VideoPoet is capable of processing text, image,
        video data that diverge from the training data distribution. Moreover,
        VideoPoet can perform novel tasks differing from those the model is
        trained on.
      </Container>

      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em" pt="1em">
          The Model
        </Heading>
        Multimodal data is tokenized into a common vocabulary, on which which an
        LLM operates for video and audio generation. A spatial super resoultion
        transformer module refines the visual details serving the purpose of
        side-stepping the computational cost associated with long sequence
        length, in particular, the quadratic memory of self-attention layers.
      </Container>
      <Container fontSize="xl" maxW={"container.lg"} mt="1em">
        The tokenizer used for video and images is <Text as="b">MAGVIT-v2</Text>
        , whose high compression allows for shorter sequence length, thereby
        making making LLM learning efficient. For audio,{" "}
        <Text as="b">Sound-Stream</Text> tokenizes the waveform. Text modality
        is represented by embeddings, produced by the pretrained{" "}
        <Text as="b">T5 XL encoder</Text>.
      </Container>

      <Container fontSize="xl" maxW={"container.lg"}>
        <Heading as="h3" size="lg" pb="0.5em" pt="1em">
          Pre-training
        </Heading>
        Tasks used in pretraining include:
        <UnorderedList pl="2em" pb="1em" pt="1em">
          <ListItem>video generation without conditioning on input</ListItem>
          <ListItem>generating video given text prompt</ListItem>
          <ListItem>predict future frames of a video given a video</ListItem>
          <ListItem>
            predict future frames of a video given the first frame
          </ListItem>
          <ListItem>filling in a masked video</ListItem>
          <ListItem>
            predicting video frames from text, optical flow, and depth (this
            task is referred to as stylization)
          </ListItem>
          <ListItem>predict video from audio</ListItem>
          <ListItem>predict audio from video</ListItem>
          <ListItem>
            given a frame and the audio, generate the remaining video
          </ListItem>
        </UnorderedList>
        The training strategy is{" "}
        <Text as="b">Alternating Graident Descent</Text>, for multitask
        training. For the first 25% iterations, image is sampled 90% of the time
        while video is sampled 10% of the time. In the remainder iterations,
        video and image are sampled 90% and 10% respectively. The training data
        across modalities consists of 2 trillion tokens, with 1B image-text
        pairs and 270M videos. Evaluation include a variety of metrics,
        including Frechet video distance, CLIP similarity, inception score.
        Human preference is also assessed when VideoPoet is compared to other
        models across characteristics such as motion interestingness, realisms,
        and temporal consistency. Interestingly, VideoPoet can rotate objects
        and predict the backside of objects, although training did not involve
        losses on 3D consistency.
      </Container>
    </>
  );
}
