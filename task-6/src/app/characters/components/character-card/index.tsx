import { Card, Image, Text } from "@mantine/core";
import React from "react";

interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
  species: string;
  imageHeight: number;
}

class CharacterCard extends React.Component<CharacterCardProps> {
  render() {
    const { image, name, gender, status, species, imageHeight } = this.props;
    const textProps = {
      fw: 400,
      size: 'lg'
    };

    const highlightedTextProps = {
      span: true,
      fw: 500,
      inherit: true,
      c: "dark"
    }

    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={image} height={imageHeight} alt={name} />
        </Card.Section>
        <Text mt="md" mb="xs" fw={600} size="xl">{name}</Text>
        <Text {...textProps}>
          <Text {...highlightedTextProps}>Species: </Text>
          {species}
        </Text>
        <Text {...textProps}>
          <Text {...highlightedTextProps}>Gender: </Text>
          {gender}
        </Text>
        <Text {...textProps}>
          <Text {...highlightedTextProps}>Status: </Text>
          {status}
        </Text>
      </Card >
    );
  }
}

export default CharacterCard;
