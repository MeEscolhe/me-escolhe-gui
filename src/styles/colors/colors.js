import {role} from '../../pt-br'

export default {
    darkViolet: '#311D3F',
    violet: '#522546',
    darkMagenta: '#a31545',
    pink: '#E23E57',
    white: '#FFFFFF',
    ice: '#EEEEEE',
    gray: '#cccccc',
    darkGray: '#545454',
    yellow: "#FFDA64",
    black: '#000000',
    green: '#35bd26',
    red: '#db4f40',
    icon: "#ff7d90",
    pinkLight: "#ff7875",
    greenLight: "#d1ff33",
    fullstack: {
        primary: "#7143e5",
        secundary: "#D450E6",
        icon: "#ef7dff"
    },
    frontEnd: {
        primary: "#FF4BA7",
        secundary: "#FFDA64",
        icon: "#ffeeb6"
    },
    backEnd: {
        primary: "#09af58",
        secundary: "#3CCBFF",
        icon: "#9de5ff"
    },
    tester: {
        primary: "#6F085A",
        secundary: "#FE3D6C",
        icon: "#ff82ab"
    },
    progress: {
        
    },
    phase: {
        progress: "#FFDA64",
        classified: "#B3EB50",
        declassified: "#6F085A",
        noProgress: "#cccccc",
    }
}

export const color = ( job ) => {
    switch (job) {
        case role.ANALYTICS:
            return { 
                primary: "#09af58",
                secundary: "#3CCBFF",
                icon: "#9de5ff"
            }          
        case role.FRONTEND:
            return {
                primary: "#FF4BA7",
                secundary: "#FFDA64",
                icon: "#ffeeb6"
            }  
        case role.DEVOPS:
            return {
                primary: "#6F085A",
                secundary: "#FE3D6C",
                icon: "#ff82ab"
            }
        case role.BACKEND:
            return {
                primary: "#7143e5",
                secundary: "#D450E6",
                icon: "#ef7dff"
            }
        default:
            return {
                primary: "#311D3F",
                secundary: "#E23E57",
                icon: "#ff7d90"
            }
    }   
}

export const skillLevel = ( level ) => {
    switch (level) {
        case 1:
            return "#ecad41"   
        case 2:
            return "#f59f3b"   
 
        case 3:
            return "#fb8e37"   

        case 4:
            return "#fb8537" 
        
        case 5:
            return "#fb6a37"   

        default:
            return "#00B8BA"   
    }   
}

export const statusPhase = ( status) => {
    switch(status){
        case 'success':
            return {
                init: "#00FFED",
                final: "#00B8BA"
            }
        case 'active':
            return { 
                init: "#FFCF1B",
                final: "#FF881B"
            }
        case 'exception':
            return {
                init: "#FF512F",
                final: "#C70030"
            }
        default:
            return {
                init: "#cccccc",
                final: '#f5f5f5'
            }
    }
}