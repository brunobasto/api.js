'use strict';

import { core } from 'metal';
import Embodied from './Embodied';

/**
 * Class responsible for building range objects to be used by `Filter`.
 * @extends {Embodied}
 */
class Range extends Embodied {
	/**
	 * Constructs a {@link Range} instance.
	 * @param {*} from
	 * @param {*} opt_to
	 * @constructor
	 */
	constructor(from, opt_to) {
		super();
		if (core.isDefAndNotNull(from)) {
			this.body_.from = from;
		}
		if (core.isDefAndNotNull(opt_to)) {
			this.body_.to = opt_to;
		}
	}

	/**
	 * Constructs a {@link Range} instance.
	 * @param {*} from
	 * @return {!Range}
	 * @static
	 */
	static from(from) {
		return new Range(from);
	}

	/**
	 * Constructs a {@link Range} instance.
	 * @param {*} from
	 * @param {*} to
	 * @return {!Range}
	 * @static
	 */
	static range(from, to) {
		return new Range(from, to);
	}

	/**
	 * Constructs a {@link Range} instance.
	 * @param {*} to
	 * @return {!Range}
	 * @static
	 */
	static to(to) {
		return new Range(null, to);
	}
}

export default Range;
