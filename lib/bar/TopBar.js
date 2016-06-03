import React, { PropTypes } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import { BarContainer } from './BarContainer';

export default class TopBar extends React.Component {

  static propTypes = {
    displayed: PropTypes.bool,
    title: PropTypes.string,
    height: PropTypes.number,
    onBack: PropTypes.func,
    onDownload: PropTypes.func,
  };

  static defaultProps = {
    displayed: false,
    title: '',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      displayed,
      title,
      height,
      onBack,
      onDownload,
    } = this.props;
    var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYTFkYzM0NC05MGMwLTQwMzEtYWM4Yy04YTE4ZDg4ZDJhYjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjlENzhENkUyMEJCMTFFNjhFODlEMUIxRDM5NzJBMDkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjlENzhENkQyMEJCMTFFNjhFODlEMUIxRDM5NzJBMDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDBGNTc2OTdDNjcxMUU1OTk1QUYxQzIwMDJFMEU2RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NDBGNTc2QTdDNjcxMUU1OTk1QUYxQzIwMDJFMEU2RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmeOvKMAAAFcSURBVHja7JhPagIxFMaTKkLBpcUD2J7AlQeoB2h3XkLRa0jxDnbrAXqCLuwNvIDgrgvBxTT9HryBxxCTTGYGssiDHwzO+/P5nLxM1MYYlZL1I2LqfgNdx/lBJWb9BrG65U6m2aEsKAvKgrKgLMghaAUKHvkuYjZjFwXXZm+8fgjewNWEmfIQYlTrXcbZEs3ARQRtgQ4Q4ENzrtIuXEv5BBEv4CSCP8GggRiK3Yt8J66hQgURI/AtknyBYYSYIceWRjmf7vn7kj2Cg0j2A8Y1xJDvUcQfOKeKFUT0wK7S7klA3KTys+84l2oqqGQJCk5+BlOH75R9DMesQuvUfR7kWPgFc4vPK9+zLuu2BVXHwg0sxL0Ff3Z3WXchiHgWz8cf2IA1XzuXdVeCbGMhaFl3Kcg2FrzL2odu4ShNG/QHX294s4w/7KV2ts8vaFlQG/9+mNwhT4d0SoL+BRgAPiKJ2HAjvi0AAAAASUVORK5CYII=';

    return (
      <BarContainer
        style={styles.container}
        displayed={displayed}
        height={height}
      >
        <TouchableOpacity style={styles.backContainer} onPress={onBack}>
          <Image source={require('../../Assets/angle-left.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>图片预览 {title}</Text>
        <TouchableOpacity style={styles.download} onPress={onDownload}>
          <Image style={{width:26,height:26}} source={{uri: base64Icon, scale: 3}} />
        </TouchableOpacity>
      </BarContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  backContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    top: 16,
  },
  download:{
    position: 'absolute',
    flexDirection: 'row',
    right: 10,
    top: 28,
  },
  backText: {
    paddingTop: 14,
    marginLeft: -10,
  },
});
