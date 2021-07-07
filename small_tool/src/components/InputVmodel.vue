<template>
    <div>
        <input :value="text" @input="$emit('input',$event.target.value)"/>
    </div>
</template>

<script>
export default {
    model:{
        prop:"text",
        event:"input"
    },
    props:['text'],
}
</script>

<style>

</style>