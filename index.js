Barba.Pjax.start();
var shutterA = document.querySelector('.shutter-a');

var ShutterAnimation = Barba.BaseTransition.extend({

	// Barba.jsで定義されている。コンストラクタと考えてよいそうです。
	start: function() {
		this.shutter(5000)
			.then(this.newContainerLoading)
			.then(this.finish.bind(this));
	},

	// loadingしているようなアニメーションをさせる処理
	shutter: function(timer) {
		return new Promise( function (resolve) {
			// クラスを付け替え、移動させる
			shutterA.classList.add('moved');
			document.getElementById("open").checked = false;

			// 画面が白く埋まるまで（5000ms）待つ
			setTimeout(function () {
				resolve();
				shutterA.classList.remove('moved');
				Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container, newPageRawHTML) {

					// あと読みのjsファイルの実行
					var js = container.getElementsByTagName("script");
					if (js != null) {
						var jsCount = js.length;
						for (var i = 0; i < jsCount; i += 1) {
							if (js[i].src !== '') {
								var addJs = document.createElement("script");

								addJs.src = js[i].src;
								document.body.appendChild(addJs);

							} else {
								eval(js[i].innerHTML);
							}
						}
					}
				});
			}, timer);

		});
	},

	// アニメーションの終了を示すためにthis.done()を呼ぶことが必須
	finish: function() {
		document.body.scrollTop = 0;
		this.done();
	}

});

Barba.Pjax.getTransition = function() {
	return ShutterAnimation;
};