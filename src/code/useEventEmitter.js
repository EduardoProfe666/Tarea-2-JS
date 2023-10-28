export const useEventEmitter = ()=>{
    const listen = (event, cb)=>{
        window.addEventListener(event, cb);
    }

    const dispatchEvent = (event, data)=>{
        window.dispatchEvent(new CustomEvent(event, { detail: data } ));
    }
    
    return {
        listen,
        dispatchEvent
    }
}