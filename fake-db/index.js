import mock from './mock'

import './articles/'

mock.onAny().passThrough() // forwards the matched request over network
