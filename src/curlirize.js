import { CurlHelper } from './lib/CurlHelper';
import logger from 'fancy-log';
import * as isBrowser from 'is-browser'

export default (instance) => {
    instance.interceptors.request.use(req => {
        let curl = new CurlHelper(req);
        req.curlCommand = curl.generateCommand();
        if (!isBrowser) {
            logger.info(req.curlCommand);
        } else {
            console.info(req.curlCommand)
        }
        return req;
    });
}