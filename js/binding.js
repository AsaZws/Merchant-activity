(function($) {
  // 获取键盘上的关闭按钮
  var oShut = $("#shut");
  // 获取键盘的id
  var oShutkey = $("#shutkey");
  // 获取车牌框切换的id
  var oPlate = $("#plate");
  // 获取号码牌的li
  var oPli = $("#plate li");
  // 获取数字拼音软键盘的每个值
  var oOli = $("#keyboard li");
  // 获取地名简称软键盘的每个值
  var oOlia = $("#keyboarda li");
  // 获取地方简称键盘的id
  var oArea = $("#area");
  // 获取地方简称的关闭按钮
  var oShuta = $("#shuta");

  // 点击关闭，关闭键盘
  oShut.click(function() {
    oShutkey.slideUp(100);
  });
  // 点击关闭，关闭地名键盘
  oShuta.click(function() {
    oArea.slideUp(100);
  });

  // 切换车牌号码框的函数
  (function() {
    // 定义车牌框变量
    var oPok = 2;
    // 定义键盘变量
    var oOlok;

    // 给车牌框绑定点击事件
    oPli.bind("click", function() {
      // 获取车牌框里面的索引值
      var index = $(this).index();
      // 点击哪个框就给哪个框添加绿色框，并去掉其他绿色框
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
      oPok = index;
      // 隐藏新能源信息
      function onew() {
        $(".new").show(50);
      }
      // 隐藏地名简称键盘
      function oarea() {
        oArea.slideUp(200);
      }
      // 显示数字拼音键盘
      function oshutkey() {
        oShutkey.slideDown(200);
      }

      // 当点击第一个的时候，调出地名简称键盘
      if (oPok === 0) {
        onew();
        oArea.slideDown(200);
        oShutkey.slideUp(200);
        // 当点击最后一个的时候隐藏自己的innerText值
      } else if (oPok === 7) {
        $(".new").hide(100);
        oarea();
        oshutkey();
        // 当点击第二个的时候，弹出数字拼音键盘
      } else if (oPok === 1) {
        onew();
        oarea();
        oshutkey();
        // 当点击第7个的时候全部显示
      } else if (oPok === 6) {
        onew();
        oarea();
        oshutkey();
        // 当点击其他车牌框的时候调出数字拼音键盘
      } else {
        onew();
        oarea();
        oshutkey();
      }
    });

    // 给数字拼音键盘绑定点击事件
    oOli.bind("click", function() {
      // 获取键盘的索引
      var index = $(this).index();
      oOlok = index;
      // 绿色框加到下一个
      function opli() {
        oPli
          .eq(oPok)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
      // 点击删除按钮，往后回删内容
      if (oOlok === 38) {
        oPli.eq(oPok).html("");
        oPok--;
        opli();
        // 当回删到第一个的时候隐藏数字拼音键盘，显示地名简称键盘
        if (oPok === 0) {
          oArea.slideDown(200);
          oShutkey.slideUp(200);
          //
        } else if (oPok < 8) {
          oPli.eq(7).html('<div class="new"><span>+</span><i>新能源</i></div>');
        }
      } else {
        // 点击数字拼音键盘替换获取车牌框索引值的值
        oPli.eq(oPok).html(this.innerText);
        // 每点击一次增加一次索引
        oPok++;
        // 每点击一次绿色框跳转到下一个
        opli();
      }
      // 当绿色框达到第7个的时候隐藏绿色框，并隐藏键盘
      if (oPok > 6) {
        oShutkey.slideUp(200);
        oPli.removeClass("active");
      }
    });

    // 给地名键盘绑定点击事件
    oOlia.bind("click", function() {
      // 点击简称键盘获取车牌索引值的值
      oPli.eq(oPok).html(this.innerText);
      // 点击一次增加一次索引
      oPok++;
      if (oPok === 1) {
        oArea.slideUp(200);
        oShutkey.slideDown(200);
      }
      // 点击一次绿色框跳转到下一个
      oPli
        .eq(oPok)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  })();
})(jQuery);
