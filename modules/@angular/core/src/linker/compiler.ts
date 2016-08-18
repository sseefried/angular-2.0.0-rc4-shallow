/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {BaseException} from '../facade/exceptions';
import {ConcreteType, Type, stringify} from '../facade/lang';

import {ComponentFactory} from './component_factory';


/**
 * Low-level service for running the angular compiler duirng runtime
 * to create {@link ComponentFactory}s, which
 * can later be used to create and render a Component instance.
 * @stable
 */
export class Compiler {
  /**
   * Loads the template and styles of a component and returns the associated `ComponentFactory`.
   */
  compileComponentAsync<T>(component: ConcreteType<T>): Promise<ComponentFactory<T>> {
    throw new BaseException(
        `Runtime compiler is not loaded. Tried to compile ${stringify(component)}`);
  }
  /**
   * Compiles the given component. All templates have to be either inline or compiled via
   * `compileComponentAsync` before.
   */
  compileComponentSync<T>(component: ConcreteType<T>): ComponentFactory<T> {
    throw new BaseException(
        `Runtime compiler is not loaded. Tried to compile ${stringify(component)}`);
  }
  /**
   * Clears all caches
   */
  clearCache(): void {}
  /**
   * Clears the cache for the given component.
   */
  clearCacheFor(compType: Type) {}
}
