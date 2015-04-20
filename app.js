angular.module('calendarDemoApp', [])

.directive('myCalendar', function(){
  return {
    restrict: 'E',
    templateUrl: 'my-calendar.html',
    link: function($scope, $element, $attrs) {

	      // set intial state
	      var todaydate = new Date();
	      var currentMonth = todaydate.getMonth();
	      var currentYear = todaydate.getFullYear();

	      // set month, year in drop down
	      $scope.selectedMonth = currentMonth;
	      $scope.selectedYear = currentYear;

	      // load the calendar
	      $scope.loadCalendar = function(year, month){
	        $scope.range = CalendarRange.getMonthlyRange(new Date(year, month));
	        $scope.range.days.forEach(addPreviousNextMonthClass);
	      };

	      // display calendar
	      $scope.loadCalendar(currentYear, currentMonth);

	      // on drop down change, recreate calendar
	      $scope.refreshCalendar = function(){
	        currentMonth = $scope.selectedMonth;
	        $scope.loadCalendar($scope.selectedYear, $scope.selectedMonth);
	      };

	      // set appropriate class for previous and next months
	      function addPreviousNextMonthClass(element, index, array){
	        if(element.month < currentMonth || element.month > currentMonth){
	          element.monthClass = 'previous-next-month';
	        }
	      }
    }
  };
});