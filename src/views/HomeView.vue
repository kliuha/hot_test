<template>
  <div class="element-homepage">
    <div class="home-wrapper">
      <div class="home-header">
        <div class="text-wrapper">Всі дизайни</div>
        <ButtonPrimary
            buttonLabelButtonLabelClassName="button-primary-instance"
            buttonLabelDivClassName="button-primary-normal-instance"
            buttonLabelText="Додати дизайн"
            class="button-primary-normal"
          />
    </div>
      <div class="content">
        <DesignPreview
          class="design-preview-instance"
          text="Flora"
          text1="104"
          thumb="https://c.animaapp.com/wrJOuwGF/img/thumb-8.svg"
        />
        <DesignPreview
          class="design-component-instance-node"
          text="Flora"
          text1="105"
          thumb="https://c.animaapp.com/wrJOuwGF/img/thumb-7.svg"
        />
        <DesignPreview
          class="design-preview-2"
          text="SunWear"
          text1="103"
          thumb="https://c.animaapp.com/wrJOuwGF/img/thumb-6.svg"
        />
        <DesignPreview
          class="design-preview-3"
          text="Ostrov"
          text1="105"
          thumb="https://c.animaapp.com/wrJOuwGF/img/thumb-5.svg"
        />
        <DesignPreview
          class="design-preview-4"
          text="Ostrov"
          text1="105"
          thumb="https://c.animaapp.com/wrJOuwGF/img/thumb-4.svg"
        />
        <DesignPreview
          class="design-preview-5"
          text="Ostrov"
          text1="105"
          thumb="https://c.animaapp.com/wrJOuwGF/img/thumb-3.svg"
        />
        <DesignPreview
          class="design-preview-6"
          text="Ostrov"
          text1="105"
          thumb="https://c.animaapp.com/wrJOuwGF/img/thumb-2.svg"
        />
        <DesignPreview
          class="design-preview-7"
          text="Ostrov"
          text1="105"
          thumb="https://c.animaapp.com/wrJOuwGF/img/thumb-1.svg"
        />
      </div>
      <LeftPanel LOGOLogoClassName="left-panel-2" class="left-panel-instance" :hasLogOut="false" :hasUser="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonPrimary from "../components/ButtonPrimary.vue";
import DesignPreview from "../components/DesignPreview.vue";
import LeftPanel from "../components/LeftPanel.vue";
</script>

<style>
.element-homepage {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: var(--design-bg);
}

.home-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.element-homepage .home-wrapper {
  height: 1200px;
  margin-top: 20px;
}

.element-homepage .content {
  height: 1200px;
  width: 1324px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.element-homepage .button-primary-normal {
  width: 122px;
}

.element-homepage .button-primary-instance {
  width: 98px;
}

.element-homepage .button-primary-normal-instance {
  color: var(--white);
  width: 100px;
}

.text-wrapper {
  color: var(--white);
  font-family: "Roboto", Helvetica;
  font-size: 24px;
  font-weight: 400;
  height: 40px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
  width: 147px;
}

.left-panel-instance {
  height: 1200px;
  left: 0;
  position: absolute;
  top: 0;
}

.left-panel-2 {
  background-image: url(https://c.animaapp.com/wrJOuwGF/img/subtract-1.svg);
  left: 8px;
  position: relative;
  top: 9px;
}
</style>