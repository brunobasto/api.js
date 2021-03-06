'use strict';

import { core } from 'metal';
import ClientMessage from './ClientMessage';

/**
 * Represents a client response object.
 * @extends {ClientMessage}
 */
class ClientResponse extends ClientMessage {
	constructor(clientRequest) {
		super();
		if (!clientRequest) {
			throw new Error('Can\'t create response without request');
		}
		this.clientRequest_ = clientRequest;
	}

	/**
	 * Returns request that created this response.
	 * @return {!ClientRequest}
	 */
	request() {
		return this.clientRequest_;
	}

	/**
	 * Fluent getter and setter for response status code.
	 * @param {number=} opt_statusCode Request status code to be set. If none is given,
	 *   the current status code value will be returned.
	 * @return {!ClientMessage|number} Returns response status code if no new value was
	 *   given. Otherwise returns the {@link ClientMessage} object itself, so calls can
	 *   be chained.
	 * @chainable Chainable when used as setter.
	 */
	statusCode(opt_statusCode) {
		if (core.isDef(opt_statusCode)) {
			this.statusCode_ = opt_statusCode;
			return this;
		}
		return this.statusCode_;
	}

	/**
	 * Fluent getter and setter for response status text.
	 * @param {string=} opt_statusText Request status text to be set. If none is given,
	 *   the current status text value will be returned.
	 * @return {!ClientMessage|number} Returns response status text if no new value was
	 *   given. Otherwise returns the {@link ClientMessage} object itself, so calls can
	 *   be chained.
	 * @chainable Chainable when used as setter.
	 */
	statusText(opt_statusText) {
		if (core.isDef(opt_statusText)) {
			this.statusText_ = opt_statusText;
			return this;
		}
		return this.statusText_;
	}

	/**
	 * Checks if response succeeded. Any status code 2xx or 3xx is considered valid.
	 * @return {boolean}
	 */
	succeeded() {
		return this.statusCode() >= 200 && this.statusCode() <= 399;
	}

}

export default ClientResponse;
