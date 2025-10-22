export const getInitials = (name: string)=>{
    if(!name) return 'NN'

    return name.split(' ')
    .filter(Boolean)
    .map(part=>part[0].toUpperCase())
    .join('')
}