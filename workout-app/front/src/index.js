import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import reportWebVitals from './reportWebVitals'
import App from './Routes'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// import { ReactQueryDevtools } from 'react-query'
 
const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient} >
            <App />
            {/* <ReactQueryDevtools initialIsOpen = { false } />  */}
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
)


reportWebVitals()