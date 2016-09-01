RxHubController.controller('buttonsController', ['$scope', '$route', '$window', function ($scope, $route, $window) {

    $scope.data = $route.current.$$route.data;
    $scope.STATES = { INITIAL: 0, RUNNING: 1, EDITING: 2 },
    $scope.STATE = $scope.STATES.INITIAL
    $scope.lastEmitted = 0;
    $scope.codeMirror = null;


    $scope._initializer = {
        window: function () {
            if (window.ANON[0])
                window.ANON.forEach(anon=> {
                    anon.dispose();
                    delete anon;
                });

            window.ANON = [];
            window.OBS = [];
            window.RESULT = [];
            window.NXT = function (value) {
                $scope.$applyAsync(function () { $scope.rxHandler.onResult("onNext", value) });
            }
            window.ERR = function (value) {
                $scope.$applyAsync(function () { $scope.rxHandler.onResult("onError", value) });
            }
            window.CMP = function () {
                $scope.$applyAsync(function () { $scope.rxHandler.onResult("onCompleted", null) });
            }
            window.codeMirror = $scope.codeMirror
        },
        scope: function () {
            $scope.result = [];
            $scope.emittingSubjects = [];
        },
        mirror: function () {
            $scope.snippet = document.getElementById('snippet');
            $scope.codeMirror = CodeMirror.fromTextArea($scope.snippet, {
                lineNumbers: true,
                theme: "material",
                lineNumbers: true,
                height: 'auto',
                styleActiveLine: true,
                matchBrackets: true
            });
        },
        clean: function () {
            $scope.emittingSubjects.forEach(emittingSubject=> {
                emittingSubject.subject.observers.forEach(observer=> {
                    observer.dispose();
                })
                emittingSubject.subject.dispose();
                emittingSubject.subject = new Rx.Subject();
                emittingSubject.emissions = [];
            });
            $scope.result.forEach(res=> {
                res.value = null;
                res.offset = null;
                res = null;
            })
            $scope.result.length = 0;
            $scope.lastEmitted = 0;
        },
        populateSubjects: function (num) {
            while ($scope.emittingSubjects.length < num)
                $scope.driver.add();
        }
    }


    $scope.driver = {
        //TODO: randomize the newly added values
        add: function () {
            $scope.emittingSubjects.push({
                subject: new Rx.Subject(),
                emissions: [],
                value: true

            })
        },
        run: function () {
            window.OBS = $scope.emittingSubjects.map(sub=>sub.subject);
            try {
                eval($scope.codeMirror.getValue());
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                    return $scope.STATES.EDITING;
                } else {
                    alert(e);
                    return $scope.STATES.EDITING;
                }
            }

            $scope.driver.refresh();
            return $scope.STATES.RUNNING;
        },
        edit: function () {
            $scope._initializer.clean();
        },
        refresh: function () {
            $scope.result = RESULT;
        }

    }

    // TODO : create a seperate class for rxHandler.
    $scope.rxHandler = {
        onNext: function (index, value, type) {
            type = type || "onNext";
            value = JSON.parse(value);
            $scope.rxHandler.onFake($scope.emittingSubjects[index].emissions);
            $scope.emittingSubjects[index].subject.onNext(value);
            $scope.emittingSubjects[index].emissions.push({ offset: ++$scope.lastEmitted, value: value, type: type });
        },
        onError: function (index, value, type) {
            type = type || "onError";
            vale = JSON.parse(value);
            $scope.rxHandler.onFake($scope.emittingSubjects[index].emissions);
            $scope.emittingSubjects[index].emissions.push({ offset: ++$scope.lastEmitted, value: value, type: type });
            $scope.emittingSubjects[index].subject.onError(value);

        },
        onCompleted: function (index, value, type) {
            type = type || "onCompleted";
            value = JSON.parse(value);
            $scope.rxHandler.onFake($scope.emittingSubjects[index].emissions);
            $scope.emittingSubjects[index].subject.onCompleted(value);
            $scope.emittingSubjects[index].emissions.push({ offset: ++$scope.lastEmitted, value: value, type: type });
        },
        onFake: function (emissions, type) {
            type = type || "onFake"
            var start = emissions.peek() ? emissions.peek().offset : 0
            var end = $scope.lastEmitted;
            while (start < end)
                emissions.push({ offset: ++start, value: '', type: type });
        },
        onResult: function (type, value) {
            $scope.rxHandler.onFake($scope.result);
            $scope.result.push({ value: value, offset: ++$scope.lastEmitted, type: type })
        }
    }


    $scope.HACKS = {
        MDL: function () {
            window.upgradeElements();
        },
        HYPHEN: function (value, index) {
            try {
                JSON.parse(value);
            } catch (e) {
                document.querySelectorAll('.inputValues')[index].classList.add('is\-invalid')
                return false;
            }
            document.querySelectorAll('.inputValues')[index].classList.remove('is\-invalid')
            return true;

        }

    }


    $scope._initializer.mirror();
    $scope._initializer.scope();
    $scope._initializer.window();
    $scope._initializer.populateSubjects($scope.data.prefill);

}])