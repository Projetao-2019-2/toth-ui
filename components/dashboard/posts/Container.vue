<template>
  <div class="posts-container grid">
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum non orci ut dignissim. Fusce fermentum felis aliquam, mattis nibh ut, faucibus leo. Sed lectus libero, volutpat at eros quis, venenatis tempus neque. Nulla vel faucibus orci, nec convallis ligula. Quisque maximus gravida orci, in lacinia mauris pretium nec. Sed et enim bibendum, fermentum tellus eu, eleifend ex. Aliquam lectus magna, sollicitudin vitae placerat ac, semper ut risus. Nunc vestibulum lacus et nulla volutpat auctor.</p></div></div>
    <div class="oi item"><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum non orci ut dignissim. Fusce fermentum felis aliquam, mattis nibh ut, faucibus leo. Sed lectus libero, volutpat at eros quis, venenatis tempus neque. Nulla vel .</p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, conse</p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum non orci ut dignissim. Fusce fermentum felis aliquam, mattis nibh ut, faucibus leo. Sed lectus libero, volutpat at eros quis, venenatis tempus neque. Nulla vel faucibus orci, nec convallis ligula. Quisque maximus gravida orci, in lacinia mauris pretium nec. Sed et enim bibendum, fermentum tellus eu, eleifend ex. Aliquam lectus magna, sollicitudin vitae placerat ac, semper ut risus. Nunc vestibulum lacus et nulla volutpat auctor.</p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum non orci ut dignissim. Fusce fermentum felis aliquam, mattis nibh ut, faucibus leo. Sed lectus libero, volutpat at eros quis, venenatis tempus neque. Nulla vel faucibus orci, nec convallis ligula. Quisque maximus gravida orci, in lacinia mauris pretium nec. Sed et enim bibendum, fermentum tellus eu, eleifend ex. Aliquam lectus magna, sollicitudin vitae placerat ac, semper ut risus. Nunc vestibulum lacus et nulla volutpat auctor.</p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
    <div class="oi item" ><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem, nec convallis ligula. Quisque maximus </p></div></div>
  </div>
</template>

<script>
import Post from "./post"

export default {
  name: "Posts",
  components: {
    Post
  },
  methods: {
    resizeGridItem(item){
      let grid = document.getElementsByClassName("grid")[0];
      let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = "span "+rowSpan;
    },
    resizeAllGridItems(){
      var allItems = document.getElementsByClassName("item");
      for(let x=0;x<allItems.length;x++){
        this.resizeGridItem(allItems[x]);
      }
    },
    resizeInstance(){
      var allItems = document.getElementsByClassName("item");
      for(let x=0;x<allItems.length;x++){
        this.resizeGridItem(allItems[x]);
      }
    },
    animate () {
      window.requestAnimationFrame(this.animate);
      this.resizeAllGridItems();
    }
  },
  mounted() {
    // window.onload = this.resizeAllGridItems();
    // window.addEventListener("resize", this.resizeAllGridItems);
    this.resizeInstance();
    this.animate();
  }
}
</script>

<style>
  .grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-auto-rows: 20px;
    justify-items: center;
    margin-top: 10px;
  }
  .oi {
    width: 300px;
    border: 1px solid black;
  }
  .item {
    background: grey;
  }
</style>