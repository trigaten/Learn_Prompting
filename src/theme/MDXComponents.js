// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {AIOutput, AIInput} from './AIElement'; // Corrected import statement
import {ImageComponent} from './ImageComponent'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  LazyLoadImage,
  AIOutput,
  AIInput,
  ImageComponent
};