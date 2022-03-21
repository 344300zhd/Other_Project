<template>
    <div>
        <p>this is slot page !</p>
        <div style="color:red">
            <slot></slot>
        </div>
        <div style="color:green">
            <slot name="green"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"Content",
    created(){
        console.log("子组件创建成功");
    }
};
</script>

<style>
</style>