import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad25f4eb5444edddb0c5fb252a7f1dce&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7834d8f490640ffe7e7f251227679b3d&auto=format&fit=crop&w=500&q=60',
    altText: '',
    caption: 'Slide 2'
  },
  {
    src: 'https://images.unsplash.com/photo-1516355161757-eed94aecaeab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b23a84e9f4fab7e299ff25eb005f3249&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default ImageSlider;