// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  LazyLoadImage,
};