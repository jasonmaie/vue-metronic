<template>
  <!-- BEGIN SIDEBAR -->
  <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
  <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
  <div class="page-sidebar navbar-collapse collapse">
    <!-- BEGIN SIDEBAR MENU -->
    <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
    <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
    <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
    <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
      <page-sidebar-item v-for="(sidebarItem, index) in sidebarData"
                         :key="sidebarItem.title"
                         :model="sidebarItem"
                         :class="{'start active': index===0}"
                         :set-active="setActive"
      ></page-sidebar-item>
    </ul>
    <!-- END SIDEBAR MENU -->
  </div>
  <!-- END SIDEBAR -->
</template>

<script>
  import PageSidebarItem from './page-sidebar-item'

  export default{
    props: {
      sidebarData: {type: Array, required: true},
      setActive: {
        type: Function,
        default: () => true
      }
    },
    components: {
      PageSidebarItem
    }
  }
</script>
