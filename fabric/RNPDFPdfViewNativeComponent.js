/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 */

import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';
import type {HostComponent} from 'react-native';
import type {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

type Event = $ReadOnly<{|
  message: string,
|}>;

type NativeProps = $ReadOnly<{|
  ...ViewProps,
  path: ?string,
  page: number,
  scale: number,
  minScale: number,
  maxScale: number,
  horizontal: boolean,
  spacing: number,
  password?: ?string,
  enableAntialiasing: boolean,
  enableAnnotationRendering: boolean,
  enablePaging: boolean,
  enableRTL: boolean,
  fitPolicy: number,
  singlePage: boolean,
  // Events
  onChange: BubblingEventHandler<Event>,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'RNPDFPdfView',
  {
    interfaceOnly: false,
  }
): HostComponent<NativeProps>);